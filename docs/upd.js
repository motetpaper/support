#!/usr/bin/env node

const fs = require('fs')

const infile = process.argv[2];
const outfile = infile;

fs.readFile(infile, 'utf8', (err,data)=>{
  const dt = new Date();
  const upd = [
    'updated:',
    dt.toLocaleDateString('en-CA'),
    dt.toLocaleTimeString('en-GB')
  ].join(' ');

  const outdata = '' + data.replace(/updated: .*/, upd);
  console.log('foo!');

  fs.writeFile(outfile, outdata, (err)=>{
    if (err) throw err;
  });
});
