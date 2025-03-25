import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const templatesDir = path.join(__dirname, 'src/templates')
const distDir = path.join(__dirname, 'src/dist')

const replaceVariablesInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8')

  for (const key in process.env) {
    console.log(process.env[key
    ]);

    const regex = new RegExp(`{{\\s*process\\.env\\.${key}\\s*}}`, 'g')
    content = content.replace(regex, `'${process.env[key]}'`)
  }

  return content
}


const processTemplates = () => {
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir)

  const files = fs.readdirSync(templatesDir)

  for (const file of files) {
    const filePath = path.join(templatesDir, file)
    const outputPath = path.join(distDir, file)

    const newContent = replaceVariablesInFile(filePath)

    fs.writeFileSync(outputPath, newContent, 'utf-8')
    console.log(`✅ File generated: ${outputPath}`)
  }
}

processTemplates()
