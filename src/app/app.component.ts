import { Component } from '@angular/core';
import { Options } from 'sortablejs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {
        // this.items = this.getAlphabet();
        // this.composeWord("sortable");
        this.items = this.getWords();
        this.loadSomeItems();
    }

    public readonly items: IItem[] = [];
    public readonly selectedItems: IItem[] = [];
    public readonly selectedItemsOptions: Options = {
        sort: true,
        revertOnSpill: true
    };

    public toggle(item: IItem) {
        if (!item.isSelected) this.add(item);
        else this.remove(item);
    }

    public add(item: IItem) {

        if (!this.selectedItems
            || this.selectedItems.includes(item))
            return;

        item.isSelected = true;
        this.selectedItems.push(item);
    }

    public remove(item: IItem) {

        if (!item || !this.selectedItems)
            return;

        const i = this.selectedItems.indexOf(item);
        if (i != -1) {
            item.isSelected = false;
            this.selectedItems.splice(i, 1)
        }
    }

    private getWords() {
        return [
            "banana", "crow", "chameleon",
            "lion", "bee", "dinosaur",
            "apple", "ape", "giraffe", "dog",
            "moonstone", "cat", "Saruman"]
            .map((w, i) => ({ id: i, label: w } as IItem));
    }

    private getAlphabet() {
        const alphabet = [];
        for (let i = 65; i <= 90; i++) {
            alphabet.push({
                id: i,
                label: String.fromCharCode(i)
            });
        }
        return alphabet;
    }

    private composeWord(word: string) {
        word = word.toUpperCase();
        for (let c of word) {
            const cc = c.charCodeAt(0);
            const ci = cc - 65;
            this.add(this.items[ci]);
        }
    }

    private loadSomeItems() {
        let i = 0;
        while (i < this.items.length) {
            if (i % 2 == 0)
                this.add(this.items[i++]);
            i++;
        }
    }
}
export interface IItem {
    id: number;
    label: string;
    isSelected?: boolean;
}