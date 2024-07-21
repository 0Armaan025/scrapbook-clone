import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import multiparty from "multiparty";
import { app, db } from "../../../firebase/clientApp";
import fs from "fs";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return await fileGET(req, res);
}

async function filePOST(req: NextApiRequest, res: NextApiResponse) {
  const form = new multiparty.Form();
  const storage = getStorage(app);

  form.parse(req, async (err: any, fields: any, files: any) => {
    if (err) {
      return res.status(500).json({ error: "File upload error" });
    }

    const file = files.file[0];
    if (!file) {
      return res.status(400).json({ error: "No File Provided" });
    }
    if (file.size > 5 * 1024 * 1024) {
      return res
        .status(400)
        .json({ error: "File size exceeds the limit of 5 MB." });
    }

    try {
      const fileBuffer = fs.readFileSync(file.path);
      const fileId = uuidv4();
      const storageRef = ref(
        storage,
        `uploads/${fileId}/${file.originalFilename}`
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

      return res
        .status(200)
        .json({ message: "Uploaded Successfully", fileURL });
    } catch (e: any) {
      const tmp = e.message || e.toString();
      console.log(tmp);
      return res.status(500).send(tmp);
    }
  });
}

async function fileGET(req: NextApiRequest, res: NextApiResponse) {
  const file = req.query.file;

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
