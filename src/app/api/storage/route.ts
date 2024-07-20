import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import formidable from "formidable";
import { fileConsumer } from "@/storage/formidable";
import { app, db } from "../../../firebase/clientApp";

const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 5 * 1024 * 1024, // 5 MB
};

const formidablePromise = (req: NextApiRequest, opts: any) => {
  return new Promise((resolve, reject) => {
    const form = formidable(opts);
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      resolve({ fields, files });
    });
  });
};

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return await fileGET(req, res);
}

async function filePOST(request: NextApiRequest, res: NextApiResponse) {
  const storage = getStorage(app);
  const chunks: never[] = [];
  const { fields, files } = (await formidablePromise(request, {
    ...formidableConfig,
    fileWriteStreamHandler: () => fileConsumer(chunks),
  })) as { fields: any; files: any };
  const file = files.file;
  const fileBuffer = Buffer.concat(chunks);
  if (!file || !file[0]) {
    return res.status(400).json({ error: "No File Provided" });
  }
  if (file[0].size > 5 * 1024 * 1024) {
    return res
      .status(400)
      .json({ error: "File size exceeds the limit of 5 MB." });
  }

  try {
    const fileId = uuidv4();
    const storageRef = ref(
      storage,
      `uploads/${fileId}/${file[0].originalFilename}`
    );
    const { metadata } = await uploadBytes(storageRef, fileBuffer);
    const { fullPath } = metadata;
    if (!fullPath) {
      return res.status(403).json({
        error: "There was some error while uploading the file.",
      });
    }
    const fileURL = await getDownloadURL(storageRef);
    console.log(fileURL);

    return res.status(200).json({ message: "Uploaded Successfully", fileURL });
  } catch (e: any) {
    const tmp = e.message || e.toString();
    console.log(tmp);
    return res.status(500).send(tmp);
  }
}

async function fileGET(request: NextApiRequest, res: NextApiResponse) {
  const file = request.query.file;

  if (file && typeof file === "string") {
    try {
      const storage = getStorage(app);

      const fileRef = ref(storage, file);

      const filePublicURL = await getDownloadURL(fileRef);

      return res.status(200).json({ filePublicURL });
    } catch (e: any) {
      const tmp = e.message || e.toString();
      console.log(tmp);
      return res.status(500).send(tmp);
    }
  }

  return res.status(400).json({ error: "Invalid Request" });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return await filePOST(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
