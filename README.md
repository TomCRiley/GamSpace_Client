# ReadMe

# 🕹GameSpace🎮
This was a 7 day solo project - I deployed this website using Heroku ➡️[HERE](www.gamespace-tr.netlify.app)⬅️. The free servers on Heroku sleep when they are not in use, so please allow a few seconds for them to wake up! 😴

## Overview and Concept
This was my final project with General Assembly. A 7 day solo project working in Python and Django on the backend, both technologies that I had only been introduced to a few days before. 

GameSpace is a Reddit-style web forum for video game lovers who want to create channels that focus on specific games or topics, publish content and comment on each other’s posts. I built the front end in React and used Material UI to style the project with the hopes it would help me build out functional components much quicker whilst I focused on the complex backend. 

My main aim was to recreate much of the CRUD functionality of a social network site like Reddit, but implement some cool features like using string’s as unique URLs and allowing users to make their own channels. 

<img width="743" alt="Screenshot 2022-05-06 at 5 35 06 pm" src="https://user-images.githubusercontent.com/97558359/168837796-7a5758f2-1131-42cd-ba61-5d1d64cad138.png">


## Brief
Create a full-stack application with a React frontend and a Django backend, as well as a fully functional RESTful API with all CRUD routes. Include at least one one-to-many and one many-to-many relationship. Custom authentication (register / login) is optional.

## Technologies Used
*Database:*
*  PostgreSQL

*Backend:*
*  Python
*  Django

*Frontend:*
*  JavaScript (ES6)
*  React.js
*  HTML5
*  CSS3 + SASS
*  Material UI

*Dependencies:*
*  django_rest_framework
*  pyjwt
*  python-dotenv
*  psycopg2-binary
*  Axios
*  react-router-dom
*  JSONWebToken

*Development Tools:*
*  VS Code
*  Git + GitHub
*  Postman
*  TablePlus
*  Heroku
*  pylint
*  UIzard.com / Figma
*  Cloudinary

## Installation Instructions
* Clone or download the project repo
* In the project root run `python manage.py runserver`
* In the frontend run `npm run start:server`
* Find the project at http://localhost:3000 in your browser

## Approach
I built out an entity relationship diagram to work on understanding the relationships , endpoints and the MVP of the application. I also built out a fairly comprehensive wireframe, something that I’d learnt helped us a great deal in project 3 [Discover.ly](https://github.com/TomCRiley/Discover.ly_Client#readme).



<img width="845" alt="Screenshot 2022-04-13 at 11 09 57 pm" src="https://user-images.githubusercontent.com/97558359/168837875-de31b628-1cf0-472e-826d-79432a3a94db.png">

<img width="960" alt="Screenshot 2022-04-14 at 3 33 40 pm" src="https://user-images.githubusercontent.com/97558359/168838167-c5fc70b5-968d-48a4-ac8f-ba243cbb4fd5.png">

## The Build
I established initially what I wanted to achieve for an MVP. User login and registration were important to the concept, as are creating channels with strings instead of integers for URLs and lastly traditional social media CRUD operations like posting, commenting and uploading images. 

Even whilst working alone, I adhered to Agile methodology like creating branches for different features in Git and reporting back to my teachers with a daily standup. 

```python
class Channel(models.Model):

    name = models.CharField(max_length=60)
    urlname = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=300)
    createdDate = models.DateField(null=True)
    image = models.CharField(max_length=200)
    user = models.ForeignKey(
        CustomUser, related_name='Channel_Creator_User_id', on_delete=models.PROTECT, null=True)
    game = models.ForeignKey(Game, related_name='games',
                             on_delete=models.PROTECT)
    platform = models.ForeignKey(
        Platform, related_name="platforms", on_delete=models.PROTECT)
    developer = models.ForeignKey(
        Developer, related_name='developers', on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.name} ID: {self.id}'

```

<img width="1495" alt="Screenshot 2022-05-06 at 6 44 41 pm" src="https://user-images.githubusercontent.com/97558359/168838231-1dcf3f8c-7eff-48bd-86bc-5b9d49fa1319.png">

Here I have created a model in Django for any Channels that a user might want to create. It includes many different fields that will be included in the database table, but I’ll focus on the `urlname` model field here. `unique=True` is self explanatory but it is fundamental to making sure that unique user created string’s for channel URL’s don’t cause database conflicts.

```python
class UrlNameChannel(RetrieveAPIView):

    def get(self, request, urlname):

        channel = Channel.objects.filter(urlname=urlname).first()
        if (channel == None):
            return Response(status=404)

        channel_serializer = ChannelSerializer(channel)
        return Response(data=channel_serializer.data)

```

In the python Channels app / views.py, I filtered for the urlname field and either returned a 404 not found or the data for the Channel from my `ChannelSerializer`.

Lastly for the backend, the urlname field is passed to the urls.py component which I aimed to keep as RESTful as possible. `path(‘channel/<str:urlname>/‘, UrlNameChannel.as_view())` .

<img width="711" alt="Screenshot 2022-05-06 at 7 00 46 pm" src="https://user-images.githubusercontent.com/97558359/168838308-5015a905-607d-4859-9f98-2c40a8e76a93.png">

Moving to the front end I used Axios to control all the endpoints. Here, I am pointing the server to the correct URL .

```javascript
// const baseurl = 'http://localhost:8000';
const baseurl = 'https://gamespace-tr.herokuapp.com';

export const getChannelByName = async (urlName) => {
  const options = {
    method: 'GET',
    url: `${baseurl}/channel/${urlName}`,
  };

  const { data } = await axios.request(options);
  return data;
};
```

Finally, when rendering the component in Channel.js, I used React’s useEffect and setState to get the correct Channel data from the backend and connect to the endpoint. 

``` javascript
const [allPosts, setAllPosts] = React.useState([]);
  const [channel, setChannel] = React.useState({});

  React.useEffect(() => {
    const getData = async () => {
      const channelData = await getChannelByName(id);
      if (channelData) {
        setChannel(channelData);

        const allPosts = await allChannelPosts(channelData.id);
        setAllPosts(allPosts);
      }
    };

    getData();
  }, []);
```


## Wins
* I really felt like I flew through designing the backend. Django helped me iterate quickly, with only a few migration conflicts along the way. Due to my careful planning, I managed to avoid dropping the database during the build. 
* Because I had complete creative control, I felt I could really design a backend that had all the potential I wanted. TablePlus was an excellent visual for the complex relationships in my database. 

## Challenges
The biggest challenge ended up being Material UI. I have since researched a little more into headless frameworks that may have operated more alike to how I had hoped that MUI would have. For example, I wanted fast and functional component deployment for complex CSS like drop-down menus, registration forms and a mobile friendly navbar. 

Unfortunately, MUI absorbed a huge amount of my time trying to wrangle it to do exactly what I needed. This means that though I have many endpoints set up and ready to implement in both the backend and the Axios API side of my React client, I ran out of time during the project week to implement all that I had hoped to.

## Future Features
First and foremost, I want to implement a few of the features I did not manage to build out in my React client during project week. 

Some other features I’d like to include are different media formats for users to upload in, video and gifs are a huge part of video game culture and the app would benefit greatly from having more diverse functionality those media formats provide. 

## Key Learnings
Time management is key, but I had learnt that in my first few projects. So what slowed me down on the client side this time? I had plenty of time and finished my Django and Python backend quite early in the project week.

CSS frameworks are no joke, they have their own syntax and require a good amount of time and investment to fully understand how to implement. Though MUI has many benefits, some of which I managed to include like modal dropdown menus and ‘card’ interfaces, it also has a lot of documentation. It might’ve been a better idea to stick to the framework I’d been working in for a few months [Bulma.io](www.bulma.io) or to rely more heavily on vanilla CSS and SASS.

I feel I strengthened my understanding of React and JavaScript greatly, and surprised myself with how I managed to implement a brand new technology (to me) like Python and Django so quickly. 

