const renderContent = (response) => {
    const {data} = response;
    let content = document.getElementById('FullName');

    console.log(content);
};

const testURL = 'https://api.ati.su/v1.0/dictionaries/cities/240';
const myInit = {
    method: 'GET',
    headers: {
        'method': 'GET',
        'Access-Control-Allow-Origin': '*',
    }

};

const myRequest = new Request(testURL, myInit);

fetch(myRequest)
    .then(renderContent);

