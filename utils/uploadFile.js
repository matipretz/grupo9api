import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../config/firebase.js'
import sharp from 'sharp'
import { v4 } from 'uuid'

export async function uploadFile (file) {
  const fileBuffer = await sharp(file.buffer)
    .resize(600, 600, { fit: 'cover' }, { lossless: true })
    .webp()
    .toBuffer()
  const fileRef = ref(storage, `products/ ${v4()}.webp`)
  const fileMetadata = {
    contentType: file.mimetype
  }
  const fileUploadPromise = uploadBytesResumable(
    fileRef,
    fileBuffer,
    fileMetadata
  )
  await fileUploadPromise
  const fileDownloadURL = await getDownloadURL(fileRef)
  return { ref: fileRef, downloadURL: fileDownloadURL }
}
