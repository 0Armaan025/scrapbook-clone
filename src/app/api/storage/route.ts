import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { app, db } from "../../../firebase/clientApp";
import {
  formidableConfig,
  formidablePromise,
  fileConsumer,
} from "@/storage/formidable";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return await fileGET(req, res);
}

async function filePOST(request: NextApiRequest, res: NextApiResponse) {
  const storage = getStorage(app);
  const chunks: never[] = [];
  const { fields, files } = await formidablePromise(request, {
    ...formidableConfig,
    fileWriteStreamHandler: () => fileConsumer(chunks),
  });
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
