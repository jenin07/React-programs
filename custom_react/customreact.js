function customrender(reactELement, container){

    // const domElement = document.createElement(reactELement.type)
    // domElement.innerHTML = reactELement.children;
    // domElement.setAttribute('href', reactELement.props.href);
    // domElement.setAttribute('target', reactELement.props.target);
    // container.appendChild(domElement)

    const domElement = document.createElement(reactELement.type);
    domElement.innerHTML = reactELement.children;
    for (const prop in reactELement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactELement.props[prop])
    }

    container.appendChild(domElement)



}

const reactELement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google'
}

const container = document.querySelector("#root")

customrender(reactELement, container)