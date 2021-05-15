import * as fs from "fs";

interface FileItem {
  path: string;
  contents: string[];
}

class SyncFileReader {
  getFiles(path: string, depth: number = 0) {
    const fileTree = [];
    const files = fs.readdirSync(path);

    for (const file of files) {
      const stats = fs.statSync(file);
      let fileItem: FileItem;

      if (stats.isDirectory()) {
        //add directory and contents
        fileItem = {
          path: file,
          contents: this.getFiles(file, depth + 1),
        };
      } else {
        //add file
        fileItem = {
          path: file,
          contents: [],
        };
      }
      fileTree.push(fileItem);
    }
    return fileTree;
  }
}

class LimitedFileReader extends SyncFileReader {
  constructor(public maxDepth: number) {
    super();
  }
  getFiles(path: string, depth = 0) {
    if (depth > this.maxDepth) {
      return [];
    }
    return super.getFiles(path, depth);
  }
}

const fileReader = new LimitedFileReader(1);

const files = fileReader.getFiles("path");
