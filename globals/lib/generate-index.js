const fs = require('fs');
const path = require('path');

// Diretório base onde começar
const baseDir = path.resolve(__dirname, '../../globals');

// Função para criar ou atualizar index.ts
function generateIndex(dir) {
  const indexPath = path.join(dir, 'index.ts');
  const items = fs.readdirSync(dir);

  let existingExports = [];
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf-8');
    existingExports = content
      .split('\n')
      .filter((line) => line.startsWith('export * from'))
      .map((line) => line.match(/export \* from '.\/(.+)'/)?.[1])
      .filter(Boolean);
  }

  const files = items.filter(
    (item) =>
      (item.endsWith('.ts') || item.endsWith('.tsx')) && item !== 'index.ts'
  );
  const directories = items.filter((item) =>
    fs.statSync(path.join(dir, item)).isDirectory()
  );

  const newExports = [
    // Exportar arquivos individuais
    ...files
      .map((file) => path.basename(file, path.extname(file))) // Remove extensão
      .filter((file) => !existingExports.includes(file))
      .map((file) => `export * from './${file}';`),

    // Exportar subdiretórios
    ...directories
      .filter((subDir) => !existingExports.includes(subDir))
      .map((subDir) => `export * from './${subDir}';`),
  ];

  if (newExports.length > 0) {
    const finalContent = existingExports.length > 0
      ? `${fs.readFileSync(indexPath, 'utf-8')}\n${newExports.join('\n')}`
      : newExports.join('\n');

    fs.writeFileSync(indexPath, finalContent, 'utf-8');
    console.log(`Atualizado: ${indexPath}`);
  } else {
    console.log(`Nenhuma atualização necessária: ${indexPath}`);
  }

  // Processar subdiretórios recursivamente
  directories.forEach((subDir) => generateIndex(path.join(dir, subDir)));
}

// Executar para o diretório base
generateIndex(baseDir);
console.log('Cascading index.ts gerados/atualizados com sucesso!');
