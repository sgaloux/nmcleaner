import path from "path";
import fs from "fs";
import program from "commander"
import { fdir } from "fdir";



function scanFolder(folder:string){
  const i = 0;
  const api = new fdir().withFullPaths().withDirs().crawlWithOptions(folder,{
    includeDirs: true,
    includeBasePath: true,
    resolvePaths: true,

    // filters: [()=>{
    //   i++;
    //   console.log('files', i);
    //   return true;
    // },(d)=>{
    //   return fs.lstatSync(d).isDirectory() 
    // }]
    
  }).sync();

  console.log(api.toString().split(','));



}


// List all node_modules root folders

// Propose a selection with folders to delete

// Execute a rimraf command on each folder => Show a timer


program.arguments("<folder>").action(scanFolder)

program.parse(process.argv);