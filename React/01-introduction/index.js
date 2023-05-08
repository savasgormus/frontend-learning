const setTime = () => {
    //! Vanilla js element
    
    const jsElement = `
    <div>
        <h1>Javascrpit Element</h1>
        <input type="text" />
        <p>${new Date().toLocaleTimeString()}</p>
    </div>
    `;

    document.querySelector('.container-1').innerHTML = jsElement;
    
    //! React element
    const reactElement = React.createElement(
        `div`,
        null,
        React.createElement('h1',null,'React'),
        React.createElement(
            `div`,
            null,
            React.createElement('input', {type: 'text'})
        ),
        React.createElement('p', null, new Date().toLocaleTimeString())
    );
    ReactDOM.render(reactElement, document.querySelector('.container-2'))
};

setInterval(setTime, 1000);