//making the contact api to handle post requests and saving it in the file as of now
import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data=await fs.promises.readdir("contactdata");
        console.log(data)
        fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body))
    } else {
      res.status(200).json({"name":"postcontact page"})
    }
  }