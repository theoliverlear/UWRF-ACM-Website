import {
    AfterViewInit,
    Directive,
    ElementRef, OnDestroy,
    Renderer2
} from "@angular/core";

@Directive({
    selector: '[discordTextHighlight]'
})
export class DiscordTextHighlightDirective implements AfterViewInit, OnDestroy {
    private readonly highlightColor: string = 'hsl(235, 86%, 65%)';
    private wordToHighlight: string = "discord";
    private observer: MutationObserver | null = null;
    constructor(private element: ElementRef, private renderer: Renderer2) {

    }
    ngAfterViewInit(): void {
        this.highlightWord(this.element.nativeElement, this.wordToHighlight);
        this.observer = new MutationObserver((): void => {
            this.highlightWord(this.element.nativeElement, this.wordToHighlight);
        });
        this.observer.observe(this.element.nativeElement, {
            childList: true,
            characterData: true,
            subtree: true,
        });
    }
    ngOnDestroy(): void {
        this.disconnectObserver();
    }
    private disconnectObserver(): void {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    }
    highlightWord(element: HTMLElement, word: string): void {
        const textNodes: Text[] = this.getTextNodes(element);
        textNodes.forEach((node: Text): void => {
            const parentNode: ParentNode = node.parentNode;
            let containsWord = node.textContent?.toLowerCase().includes(word.toLowerCase());
            if (!parentNode || !containsWord) {
                return;
            }
            const discordTextRegex: RegExp = new RegExp(`(${word})`, "gi");
            const textContents: string[] = node.textContent.split(discordTextRegex);
            textContents.forEach((part: string): void => {
                let textMatches: boolean = part.toLowerCase() === word.toLowerCase();
                if (textMatches) {
                    const spanWrapper: HTMLSpanElement = this.renderer.createElement("span");
                    // TODO: Replace with a simple style class
                    this.applyTextStyles(spanWrapper);
                    const spanTextNode: any = this.renderer.createText(part);
                    this.renderer.appendChild(spanWrapper, spanTextNode);
                    this.renderer.appendChild(parentNode, spanWrapper);
                } else {
                    const highlightTextNode: any = this.renderer.createText(part);
                    this.renderer.appendChild(parentNode, highlightTextNode);
                }
            });
            this.renderer.removeChild(parentNode, node);
        });
    }
    private applyTextStyles(spanWrapper: HTMLSpanElement): void {
        // TODO: If not a class, make a props data structure.
        this.renderer.setStyle(spanWrapper, "color", this.highlightColor);
        this.renderer.setStyle(spanWrapper, "font-size", "inherit");
        this.renderer.setStyle(spanWrapper, "font-family", "inherit");
        this.renderer.setStyle(spanWrapper, 'text-shadow', 'hsl(210, 100%, 50%) 0 0 calc(((0.25vw + 0.25vh) / 2) + 0.25rem)')
    }
    private getTextNodes(element: HTMLElement): Text[] {
        const textNodes: Text[] = [];
        const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
        let currentNode = treeWalker.nextNode();
        while (currentNode) {
            textNodes.push(currentNode as Text);
            currentNode = treeWalker.nextNode();
        }
        return textNodes;
    }
}