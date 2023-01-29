export const dataUriToBlob = (dataURI) => {
  let byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = unescape(dataURI.split(',')[1]);
  }

  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  const ia = new Uint8Array(byteString.length);

  for (let index = 0; index < byteString.length; index++) {
    ia[index] = byteString.charCodeAt(index);
  }
  return new Blob([ia], { type: mimeString });
};

export const dataURLtoFile = (dataUrl, filename) => {
  var arr = dataUrl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

// export const dataURLtoFile = (dataUrl, filename) => {
//   const arr = dataUrl.split(',');
//   (mime = arr[0].match(/:(.*?);/)[1]),
//     (bstr = atob(arr[1])),
//     (n = bstr.length),
//     (u8arr = new Uint8Array(n));
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new File([u8arr], filename, { type: mime });
// };
