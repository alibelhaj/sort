import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumberCollection";
import { CharacteresCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
const charactersCollection = new CharacteresCollection("abcDa");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
