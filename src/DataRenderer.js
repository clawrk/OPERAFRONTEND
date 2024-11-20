import React, { useState, useEffect } from 'react';
import postRequest from './api'

const DataRenderer = () => {
  var [data, setData] = useState(null);
  const API_URL = 'http://ec2-18-191-44-49.us-east-2.compute.amazonaws.com:3000/ollama/api/chat';

  const raw = JSON.stringify({
    "stream": false,
    "model": "llama3.2:latest",
    "messages": [
      {
        "role": "user",
        "content": "who is better, grindelwald or voldemort"
      },
      {
        "role": "assistant",
        "content": "Both Gellert Grindelwald and Lord Voldemort are iconic villains in the Harry Potter series. While both share some similarities, they also have distinct characteristics that set them apart. Here's a comparison of their powers, motivations, and impact on the story:\n\n**Powers and Abilities:**\n\n* Grindelwald:\n\t+ Mastery of magic, particularly in the Dark Arts.\n\t+ Skilled in Legilimency, Occlumency, and Parseltongue.\n\t+ Highly intelligent and cunning, with a talent for manipulation.\n\t+ Possesses magical creatures like dragons and giant eagles at his command.\n* Voldemort (Tom Riddle):\n\t+ Mastery of dark magic, particularly in the form of Horcruxes.\n\t+ Skilled in Legilimency, Occlumency, and Parseltongue.\n\t+ Highly intelligent and manipulative, with a talent for exploiting others' fears and insecurities.\n\t+ Can control and dominate Death Eaters through his influence.\n\n**Motivations:**\n\n* Grindelwald:\n\t+ Driven by a desire for power, recognition, and acceptance.\n\t+ Believes in the superiority of blood purity and the importance of magic in achieving this goal.\n\t+ Sees himself as an artist and a visionary, rather than a traditional villain.\n* Voldemort (Tom Riddle):\n\t+ Motivated by a desire for immortality, power, and domination.\n\t+ Seeks to establish a new world order with himself at its head.\n\t+ Believes in the importance of fear, intimidation, and manipulation as tools for achieving his goals.\n\n**Impact on the story:**\n\n* Grindelwald:\n\t+ Plays a significant role in shaping the wizarding world's understanding of magic and its darker aspects.\n\t+ Influences Albus Dumbledore's views on love, prejudice, and redemption.\n\t+ Becomes a more nuanced and complex villain as the series progresses, eliciting both sympathy and fear from readers.\n* Voldemort (Tom Riddle):\n\t+ The primary antagonist of the series, with an extensive history and backstory that informs his motivations.\n\t+ Brings about significant changes to the wizarding world, including the rise of the Death Eaters and the Dark Arts' influence.\n\t+ Represents a threat not only to Harry Potter but also to the values of love, acceptance, and understanding.\n\n**Who's better?**\n\nIt's difficult to say who is \"better\" as both villains have their own strengths and weaknesses. However, if I had to make an argument:\n\nGrindelwald might be considered the more nuanced villain because he:\n\n1. Evolves over time: Grindelwald's character development makes him a more complex and intriguing figure.\n2. Has a compelling backstory: His history with Dumbledore and his own sense of identity add depth to his story.\n3. Challenges the status quo: As a master manipulator, Grindelwald challenges traditional notions of good and evil.\n\nVoldemort, on the other hand, is a force of nature, driven by an insatiable desire for power and domination. His impact on the series is undeniable, but he:\n\n1. Lacks nuance: Voldemort's motivations and character development are often overshadowed by his sheer menace.\n2. Relys heavily on intimidation: His reliance on fear and violence makes him a more one-dimensional villain.\n\nUltimately, both Grindelwald and Voldemort are iconic villains in their own right, each with their unique strengths and weaknesses. The \"better\" villain is subjective and depends on individual perspectives on morality, power, and the nature of evil."
      },
      {
        "role": "user",
        "content": "how to make a post request in react"
      },
      {
        "role": "assistant",
        "content": "Making a POST request in React involves using the `fetch` API or a library like Axios. Here's an example of how to do it with both methods:\n\n**Method 1: Using the Fetch API**\n\n```jsx\nimport React, { useState } from 'react';\n\nconst PostRequest = () => {\n  const [name, setName] = useState('');\n  const [email, setEmail] = useState('');\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    const data = { name, email };\n    fetch('/api/endpoint', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    })\n      .then((response) => response.json())\n      .then((data) => console.log(data))\n      .catch((error) => console.error(error));\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Name:\n        <input type=\"text\" value={name} onChange={(event) => setName(event.target.value)} />\n      </label>\n      <br />\n      <label>\n        Email:\n        <input type=\"email\" value={email} onChange={(event) => setEmail(event.target.value)} />\n      </label>\n      <button type=\"submit\">Send Data</button>\n    </form>\n  );\n};\n```\n\n**Method 2: Using Axios**\n\n```jsx\nimport React, { useState } from 'react';\nimport axios from 'axios';\n\nconst PostRequest = () => {\n  const [name, setName] = useState('');\n  const [email, setEmail] = useState('');\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    const data = { name, email };\n    axios.post('/api/endpoint', data)\n      .then((response) => console.log(response.data))\n      .catch((error) => console.error(error));\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Name:\n        <input type=\"text\" value={name} onChange={(event) => setName(event.target.value)} />\n      </label>\n      <br />\n      <label>\n        Email:\n        <input type=\"email\" value={email} onChange={(event) => setEmail(event.target.value)} />\n      </label>\n      <button type=\"submit\">Send Data</button>\n    </form>\n  );\n};\n```\n\nIn both examples, we're making a POST request to the `/api/endpoint` endpoint with data in the request body. The `fetch` API returns a Promise that resolves to the server's response, which is then processed using `.then()` and `.catch()`. Axios provides a similar interface for making HTTP requests.\n\n**Best Practices:**\n\n* Always make sure to handle errors properly, either by logging them or displaying an error message to the user.\n* Use the `fetch` API or a library like Axios for all your HTTP requests in React.\n* Make sure to include a `Content-Type` header with a value of `application/json` when sending JSON data in the request body.\n* Always validate and sanitize user input before making a POST request."
      },
      {
        "role": "user",
        "content": "create api.js file of a react app where I can make post request to an api using axios"
      },
      {
        "role": "assistant",
        "content": "Here's an example of how you can create an `api.js` file in a React app where you can make POST requests using Axios:\n\n**api.js**\n```javascript\nimport axios from 'axios';\n\nconst API_URL = process.env.REACT_APP_API_URL;\n\nconst setApiUrl = (url) => {\n  API_URL = url;\n};\n\nconst postRequest = async (endpoint, data) => {\n  try {\n    const response = await axios.post(API_URL + endpoint, data);\n    return response.data;\n  } catch (error) {\n    console.error(error);\n    throw error;\n  }\n};\n\nexport { setApiUrl, postRequest };\n```\n\n**Explanation:**\n\n* We import Axios and define a constant `API_URL` that will hold the base URL of our API.\n* We create a function `setApiUrl` that allows us to update the `API_URL` variable. This can be useful if you need to switch between different APIs or environments.\n* We create a function `postRequest` that makes a POST request to the specified endpoint with the provided data. It uses Axios's `post` method and returns the response data.\n* The function also catches any errors that occur during the request and logs them to the console, throwing them back up so they can be handled by the caller.\n\n**Using the API**\n\nTo use this API in your React components, you'll need to import it and call the `setApiUrl` or `postRequest` functions as needed. Here's an example of how you might use it:\n\n```jsx\nimport React, { useState } from 'react';\nimport api from './api';\n\nconst MyComponent = () => {\n  const [data, setData] = useState({});\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    const dataToSend = { name: 'John Doe', email: 'john@example.com' };\n    api.postRequest('/users', dataToSend).then((response) => {\n      console.log(response);\n      setData(response);\n    });\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Name:\n        <input type=\"text\" value={data.name} onChange={(event) => setData({ ...data, name: event.target.value })} />\n      </label>\n      <br />\n      <label>\n        Email:\n        <input type=\"email\" value={data.email} onChange={(event) => setData({ ...data, email: event.target.value })} />\n      </label>\n      <button type=\"submit\">Send Data</button>\n    </form>\n  );\n};\n```\n\nIn this example, we import the `api` module and use its `postRequest` function to make a POST request to `/users`. The response data is then logged to the console and stored in the component's state.\n\nNote that you'll need to replace `process.env.REACT_APP_API_URL` with the actual URL of your API. You can do this by adding an environment variable in your project settings, or by hardcoding it directly into your code."
      },
      {
        "role": "user",
        "content": "how to set header"
      },
      {
        "role": "assistant",
        "content": "To set headers when making a POST request using Axios or the `fetch` API in React, you can use the following methods:\n\n**Method 1: Using Axios**\n\n```javascript\nimport axios from 'axios';\n\nconst postRequest = async (endpoint, data, headers) => {\n  try {\n    const response = await axios.post(endpoint, data, { headers });\n    return response.data;\n  } catch (error) {\n    console.error(error);\n    throw error;\n  }\n};\n```\n\nIn this example, we pass an object with the `headers` property to the `postRequest` function. The `headers` object can contain any key-value pairs you want to include in the request headers.\n\nFor example:\n\n```javascript\nconst postRequest = async (endpoint, data) => {\n  try {\n    const response = await axios.post(endpoint, data, {\n      headers: {\n        'Content-Type': 'application/json',\n        Authorization: 'Bearer YOUR_TOKEN_HERE',\n      },\n    });\n    return response.data;\n  } catch (error) {\n    console.error(error);\n    throw error;\n  }\n};\n```\n\n**Method 2: Using the `fetch` API**\n\n```javascript\nimport React, { useState } from 'react';\n\nconst postRequest = async (endpoint, data, headers) => {\n  try {\n    const response = await fetch(endpoint, {\n      method: 'POST',\n      headers,\n      body: JSON.stringify(data),\n    });\n    return response.json();\n  } catch (error) {\n    console.error(error);\n    throw error;\n  }\n};\n```\n\nIn this example, we use the `fetch` API's `headers` property to pass an object with key-value pairs that will be included in the request headers.\n\nFor example:\n\n```javascript\nconst postRequest = async (endpoint, data) => {\n  try {\n    const response = await fetch(endpoint, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        Authorization: 'Bearer YOUR_TOKEN_HERE',\n      },\n      body: JSON.stringify(data),\n    });\n    return response.json();\n  } catch (error) {\n    console.error(error);\n    throw error;\n  }\n};\n```\n\n**Example with multiple headers**\n\nYou can also pass an object with multiple key-value pairs to the `headers` property.\n\n```javascript\nconst postRequest = async (endpoint, data) => {\n  try {\n    const response = await axios.post(endpoint, data, {\n      headers: {\n        'Content-Type': 'application/json',\n        Authorization: 'Bearer YOUR_TOKEN_HERE',\n        Accept: 'application/xml',\n      },\n    });\n    return response.data;\n  } catch (error) {\n    console.error(error);\n    throw error;\n  }\n};\n```\n\nIn this example, we pass an object with three key-value pairs:\n\n* `Content-Type` set to `application/json`\n* `Authorization` set to `Bearer YOUR_TOKEN_HERE`\n* `Accept` set to `application/xml`\n\nNote that you should replace `YOUR_TOKEN_HERE` with the actual token or credentials required for authentication."
      },
      {
        "role": "user",
        "content": "who is kendra sunderland"
      },
      {
        "role": "assistant",
        "content": "Kendra Sunderland is an American artist and photographer, known for her provocative and often surreal photographs of nude women in natural settings.\n\nSunderland was born in 1981 in Olympia, Washington, and began taking photos as a teenager. She gained widespread attention in the early 2010s with her series of photographs, \"American Romance,\" which featured nude women posed in public spaces such as parks, beaches, and streets.\n\nSunderland's work often explores themes of feminism, body positivity, and the representation of women in society. Her photography style is characterized by its use of natural light, minimal editing, and an emphasis on the subject's physicality and emotional expression.\n\nIn 2014, Sunderland was arrested and charged with indecent exposure for taking photographs of nude women in a public park in Olympia. The incident sparked controversy and debate about her work, with some critics arguing that it was invasive and objectifying, while others saw it as a form of feminist art that challenged traditional notions of nudity and body image.\n\nDespite the backlash, Sunderland's work has continued to gain international attention and critical acclaim. She has exhibited her photographs in galleries and museums around the world, including the Museum of Modern Art (MoMA) in New York City.\n\nSunderland's photography style has also been influenced by her experiences as a woman and her observations about the ways in which women are perceived and represented in society. Her work often explores themes of female empowerment, self-discovery, and the complexities of human relationships.\n\nSome of Sunderland's notable works include:\n\n* \"American Romance\" (2010-2013): A series of photographs featuring nude women posed in public spaces.\n* \"Nudes in Nature\" (2012-2015): A series of photographs featuring nude women in natural settings such as forests and deserts.\n* \"Female Form\" (2016-2018): A series of photographs exploring the relationship between female bodies and their environments.\n\nOverall, Kendra Sunderland is a photographer known for her provocative and thought-provoking work that challenges traditional notions of nudity, body image, and female representation."
      },
      {
        "role": "user",
        "content": "who is marian franco, return answer in json format, return the following fields :\r\n\"Summary\"\r\n\"Age\"\r\n\"Name\"\r\n\"Gender\""
      },
      {
        "role": "assistant",
        "content": "Here's the information about Marian Franco in JSON format:\n\n```\n{\n  \"Summary\": \"Marian Franco is an American photographer and artist known for her provocative and thought-provoking works that challenge traditional notions of beauty, identity, and representation.\",\n  \"Age\": null,\n  \"Name\": \"Marian Franco\",\n  \"Gender\": \"Female\"\n}\n```\n\nNote: I couldn't find any information on a notable person named Marian Franco, so the `Age` field is empty. If you could provide more context or details about who Marian Franco is, I'd be happy to try and help again!"
      },
      {
        "role": "user",
        "content": "who is savannah bond, return answer in json format, return the following fields : \"Summary\" \"Age\" \"Name\" \"Gender\""
      },
      {
        "role": "assistant",
        "content": "I couldn't find any notable information on a person named Savannah Bond. It's possible that she may be a private individual or not a public figure. However, I did find some information on Savannah Bond, a contestant on the reality TV show \"Big Brother 17\".\n\nHere's what I found:\n\n```\n{\n  \"Summary\": \"Savannah Bond was an American television personality and former Big Brother contestant. She appeared on Season 17 of the CBS reality show in 2015.\",\n  \"Age\": null,\n  \"Name\": \"Savannah Bond\",\n  \"Gender\": \"Female\"\n}\n```\n\nUnfortunately, I couldn't find any specific information on her age, as it's not publicly available. If you have any more context or details about Savannah Bond, I'd be happy to try and help again!"
      },
      {
        "role": "user",
        "content": "who is James potter, return answer in json format, return the following fields : \"Summary\" \"Age\" \"Name\" \"Gender\""
      },
      {
        "role": "assistant",
        "content": "I couldn't find any notable information on a person named James Potter. However, I did find information on a fictional character named James Potter from the Harry Potter book series by J.K. Rowling.\n\nHere's what I found:\n\n```\n{\n  \"Summary\": \"James Potter was a British wizard and one of the main characters in J.K. Rowling's Harry Potter fantasy series. He is the father of Harry Potter and Hermione Granger.\",\n  \"Age\": null,\n  \"Name\": \"James Potter\",\n  \"Gender\": \"Male\"\n}\n```\n\nIf you're referring to James Potter, the fictional character from the Harry Potter series, I can provide more information on his background and story.\n\nHowever, if you meant a real person named James Potter, I couldn't find any notable or public information on him. Can you please provide more context or details about who James Potter is?"
      },
      {
        "role": "user",
        "content": "who is marian franco, return answer in json format, return the following fields \n\"Summary\"  // string\n  \"Nicknames\" //list of string\n \"Name\" //string\n\"Gender\" //string"
      },
      {
        "role": "assistant",
        "content": "I found information on a person named Marian Franco. Here's what I found:\n\n```\n{\n  \"Summary\": \"Marian Franco is an American actress and model, best known for her roles in the TV series 'Big Brother' (2015) and 'The Challenge' (2017).\",\n  \"Nicknames\": [\"Franco\", \"Mae\"],\n  \"Name\": \"Marian Franco\",\n  \"Gender\": \"Female\"\n}\n```\n\nPlease note that I couldn't find any additional information on Marian Franco beyond her acting and modeling career, so the list of Nicknames is limited to the two nicknames I found. If you have any more context or details about who Marian Franco is, I'd be happy to try and help again!"
      },
      {
        "role": "user",
        "content": "who is james potter, return answer in json format, return the following fields \"Summary\" // string \"Nicknames\" //list of string \"Name\" //string \"Gender\" //string"
      },
      {
        "role": "assistant",
        "content": "I found information on two individuals named James Potter:\n\n**James Potter (fictional character)**\n\n```\n{\n  \"Summary\": \"James Potter was a British wizard and one of the main characters in J.K. Rowling's Harry Potter fantasy series.\",\n  \"Nicknames\": [\"Prongs\"],\n  \"Name\": \"James Potter\",\n  \"Gender\": \"Male\"\n}\n```\n\n**James Potter (American football player)**\n\n```\n{\n  \"Summary\": \"James Potter was an American football quarterback who played college football for the University of Miami.\",\n  \"Nicknames\": [\"Mangy\", \"J-Money\"],\n  \"Name\": \"James E. Potter\",\n  \"Gender\": \"Male\"\n}\n```\n\nPlease note that there may be other individuals named James Potter, but these two are the most notable ones I could find. If you have any more context or details about who James Potter is, I'd be happy to try and help again!"
      },
      {
        "role": "user",
        "content": "who is marian franco, return answer in json format, return the following fields\r\n\"Summary\" // string\r\n\"Nicknames\" //list of string\r\n\"Name\" //string\r\n\"Gender\" //string"
      },
      {
        "role": "assistant",
        "content": "I found information on a person named Marian Franco.\n\n```\n{\n  \"Summary\": \"Marian Franco is an American actress and model. She appeared in the film 'Magic Mike' (2012) and was a contestant on the reality TV show 'Big Brother US' (2015).\",\n  \"Nicknames\": [\"Franco\", \"Mae\"],\n  \"Name\": \"Marian Franco\",\n  \"Gender\": \"Female\"\n}\n```\n\nI couldn't find any additional information on Marian Franco beyond her acting and modeling career. If you have any more context or details about who Marian Franco is, I'd be happy to try and help again!"
      },
      {
        "role": "user",
        "content": "who is james potter, return answer in json format, return the following fields \"Summary\" // string \"Nicknames\" //list of string \"Name\" //string \"Gender\" //string"
      },
      {
        "role": "assistant",
        "content": "I found information on two individuals named James Potter:\n\n**James Potter (fictional character)**\n\n```\n{\n  \"Summary\": \"James Potter was a British wizard and one of the main characters in J.K. Rowling's Harry Potter fantasy series.\",\n  \"Nicknames\": [\"Prongs\"],\n  \"Name\": \"James Potter\",\n  \"Gender\": \"Male\"\n}\n```\n\n**James Potter (American football player)**\n\n```\n{\n  \"Summary\": \"James E. 'Mangy' Potter was an American football quarterback who played college football for the University of Miami.\",\n  \"Nicknames\": [\"Mangy\", \"J-Money\"],\n  \"Name\": \"James E. Potter\",\n  \"Gender\": \"Male\"\n}\n```\n\n**James Potter (British politician)**\n\n```\n{\n  \"Summary\": \"Sir James Thomas 'Buster' Potter was a British Labour Party politician who served as a Member of Parliament for Stoke-on-Trent.\",\n  \"Nicknames\": [\"Buster\"],\n  \"Name\": \"James Thomas Potter\",\n  \"Gender\": \"Male\"\n}\n```\n\nPlease note that there may be other individuals named James Potter, but these three are the most notable ones I could find. If you have any more context or details about who James Potter is, I'd be happy to try and help again!"
      },
      {
        "role": "user",
        "content": "Give only 1 result"
      },
      {
        "role": "assistant",
        "content": "Here is the information on James Potter in JSON format:\n\n```\n{\n  \"Summary\": \"James Potter was a British wizard and one of the main characters in J.K. Rowling's Harry Potter fantasy series.\",\n  \"Nicknames\": [\"Prongs\"],\n  \"Name\": \"James Potter\",\n  \"Gender\": \"Male\"\n}\n```\n\nThis is the most well-known James Potter, the father of Harry Potter and one of the main characters in the Harry Potter book series."
      },
      {
        "role": "user",
        "content": "return only json string"
      }
    ],
    "options": {},
    "session_id": "Nf8WeAY7LJJGME_8AAAh",
    "chat_id": "be8f1ac4-f2fe-439d-896c-ce3974bb9860",
    "id": "0b5da9b7-0a6e-4757-965e-9970ae1321df"
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await postRequest(API_URL, raw); // Fix: Call fetchData()
      if (!response) {
        throw new Error('Invalid data');
      }
      var result = response.data['message']['content'];
      data = JSON.parse(result);
      setData(data);
      console.log(response.data['message']['content']);
    };
    fetchData(); // Pass the function to fetchData()
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>{data["Summary"]}</h1>
          <ul>
            {data["Nicknames"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{data["Name"]}</p>
            <p>{data["Gender"]}</p>
        </div>
      )}
    </div>
  );
};

export default DataRenderer;