
class HTMLWrapper<T extends HTMLElement> {
     element: T;

     constructor(Element: T) {
          this.element = Element;
     }

     setTextContent(text: string) {
          this.element.textContent = text;
     }

     setAttribute(name: string, value: string) {
          this.element.setAttribute(name, value);
     }

     appendTo(parent: HTMLElement) {
          parent.appendChild(this.element);
     }
}

// Usage
const buttonWrapper = new HTMLWrapper<HTMLButtonElement>(document.createElement("button"));
buttonWrapper.setTextContent("Hello, world!");
buttonWrapper.setAttribute("id", "myDiv");
buttonWrapper.appendTo(document.body);