import { fileURLToPath } from "url"
import fs from "fs"

// limit
const limit = {
   free: 25,
   premium: 250,
   VIP: "Infinity",
   download: {
      free: 30000000, // use byte
      premium: 100000000, // use byte
      VIP: 1130000000, // use byte 
   }
}


export default {
   limit,
   APIs: {
      xzn: {
         URI: 'https://xzn.wtf',
         Key: "i dont know"
      }
   },

   msg: {
      owner: '*¡TU QUE?😑!* Este comando sólo puede ser utilizado por el Propietario TheJhxnn!😮‍💨!',
      group: '*¡Este comando sólo se puede utilizar en grupos!*',
      private: '¡Este comando sólo se puede utilizar en el chat privado!',
      admin: '¡Este comando sólo puede ser utilizado por administradores de grupo!',
      botAdmin: 'El bot no es administrador, no puede acceder a esa función',
      bot: 'Fitur ini hanya dapat diakses oleh Bot A esta función sólo pueden acceder los bots',
      locked: '¡Esta función ha sido deshabilitada!',
      media: 'Responder medios...',
      error: "Parece que hay un error. El bot no se pudo ejecutar...",
      quoted: "Responder mensaje...",
      Responder mensaje: "",
      premium: "¡Este comando sólo puede ser utilizado por usuarios premium!",
      vip: "¡Este comando sólo puede ser utilizado por usuarios premium!",
      dlFree: `Archivo terminado ${formatSize(limit.download.free)} Sólo pueden acceder usuarios premium`,
      dlPremium: `WhatsApp Web no puede enviar archivos de más de ${formatSize(limit.download.premium)}`,
      dlVIP: `WhatsApp cannot send files larger than ${formatSize(limit.download.VIP)}`
   },

   options: {
      public: true,
      URI: "database.json", // use mongo or file json
      owner: ["584142577312", "582129443583"],
      pathCommand: 'commands'
   },

   Exif: {
      packId: "https://instagram.com/cak_haho",
      packName: `Jhon:`,
      packPublish: "Jhon.",
      packEmail: "dika.ardianta7@yahoo.com",
      packWebsite: "https://instgaram.com/cak_haho",
      androidApp: "https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro",
      iOSApp: "https://apps.apple.com/id/app/muslim-pro-al-quran-adzan/id388389451?|=id",
      categories: ['😹', '😎', '😱'],
      isAvatar: 0
   },

   session: {
      Path: "session",
      Name: "Akirabot"
   }
}

function formatSize(bytes) {
   if (bytes >= 1000000024) { bytes = (bytes / 1000000024).toFixed(2) + " GB"; }
   else if (bytes >= 1000024) { bytes = (bytes / 1000024).toFixed(2) + " MB"; }
   else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
   else if (bytes > 1) { bytes = bytes + " bytes"; }
   else if (bytes == 1) { bytes = bytes + " byte"; }
   else { bytes = "0 bytes"; }
   return bytes;
}

let fileP = fileURLToPath(import.meta.url)
fs.watchFile(fileP, () => {
    fs.unwatchFile(fileP)
    console.log(`Update File "${fileP}"`)
    import(`${import.meta.url}?update=${Date.now()}`)
})
