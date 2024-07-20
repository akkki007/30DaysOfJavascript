let obj = {
  title: "Atomic Habits",
  author: "Akshay nazare",
  year: 2023,
  func: () => {
    return obj.title + " - " + obj.author;
  },
  updateFunc: (yr) => {
    obj.year = yr;
  },
};
obj.updateFunc(2018);
const library = {
  name: "Ahinsa library",
  book: [
    {
      title: "book1",
      author: "UNKNOWN",
    },
    {
      title: "book1",
      author: "UNKNOWN",
    },
    {
      title: "book1",
      author: "UNKNOWN",
    },
  ],
};

// console.log(library.name);
for(let i in library.book){
    console.log(library.book[i].title);
    console.log(library.book[i].author);
}


    console.log(`${Object.keys(library.book)} - ${Object.values(library.book)}`);




let example = {
    title:"hi",
    year:3023,
    func:function(){
        return this.title +" - "+ this.year
    }
}
console.log(example.func());