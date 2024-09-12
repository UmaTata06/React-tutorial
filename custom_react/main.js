function createElement(reactElement,element)
{
    const name=document.createElement(reactElement.type);
    name.innerHTML=reactElement.children;
    console.log(reactElement.props);
    
    for(const prop in reactElement.props){
        name.setAttribute(prop,reactElement.props[prop]);
    }
    element.appendChild(name);
}
const reactElement={
    type:'a',
    props:{
        target:'_blank',
        href:"https://www.google.com"
    },
    children:"Please visit google.com"
};

const element= document.querySelector('#root');

createElement(reactElement,element);