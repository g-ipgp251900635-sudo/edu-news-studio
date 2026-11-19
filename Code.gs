// EDU-NEWS STUDIO Google Apps Script backend
// Deploy as Web app: Execute as Me. Set access according to school policy.
const FOLDER_ID = "1-mcgOlDx_qNPL6NyOWyNE0umujxyb4dT";
function doPost(e) {
  try {
    const raw=e && e.parameter && e.parameter.payload;
    if(!raw) throw new Error("Payload tidak diterima.");
    const p=JSON.parse(raw);
    if(p.action!=="uploadRecording") throw new Error("Permintaan tidak sah.");
    if(p.folderId!==FOLDER_ID) throw new Error("Folder ID tidak sepadan.");
    if(!p.pupilName||!p.pupilClass||!p.recordingTitle||!p.data) throw new Error("Maklumat murid atau video tidak lengkap.");
    const bytes=Utilities.base64Decode(p.data);
    if(bytes.length>15*1024*1024) throw new Error("Video melebihi had 15 MB.");
    const name=String(p.fileName||"rakaman-wartawan-cilik.webm").replace(/[\\\\/:*?"<>|]/g,"_").slice(0,180);
    const blob=Utilities.newBlob(bytes,p.mimeType||"video/webm",name);
    const folder=DriveApp.getFolderById(FOLDER_ID);
    const file=folder.createFile(blob);
    file.setDescription("EDU-NEWS STUDIO | Murid: "+p.pupilName+" | Kelas: "+p.pupilClass+" | Tajuk: "+p.recordingTitle);
    return result_(true,"Rakaman berjaya disimpan dalam Google Drive.",file.getName(),file.getId());
  } catch(err) { return result_(false,err.message||"Ralat menyimpan fail.","",""); }
}
function result_(success,message,fileName,fileId){
  const data=JSON.stringify({type:"EDU_NEWS_UPLOAD_RESULT",success,message,fileName,fileId});
  const html='<!doctype html><html><body><script>window.top.postMessage('+data+', "*");</script>'+message+'</body></html>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}