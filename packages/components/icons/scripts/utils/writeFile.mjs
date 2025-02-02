import fs from 'fs'
import path from 'path'

const writeFile = (file, data, cwd = process.cwd()) => {
  const filePath = path.relative(cwd, file)
  const { root, dir, base, ext, name } = path.parse(filePath)
  fs.mkdirSync(path.dirname(file), { recursive: true })

  return fs.writeFileSync(path.join(dir, base), data)
}

export default writeFile
