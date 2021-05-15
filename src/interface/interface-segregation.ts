interface Printer {
  printDocument(document: Document);
}

interface Stapler {
  stapleDocument(document: Document, tray: number);
}

interface Copier {
  copyDocument();
}

// simple printer
class SimplePrinter implements Printer {
  printDocument(document: Document);
}

//super printer

class SuperPrinter implements Printer, Stapler, Copier {
  printDocument(document: Document);
  stapleDocument(document: Document, tray: number);
  copyDocument();
}
