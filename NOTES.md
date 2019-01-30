# App Overview
- Better idea/practice on basic and fundamental React
- Similar to Photos App with Unsplash API
- Essentially a Youtube browser app
  - User can enter in a search term, ie: tulips
  - Request to Youtube public, free API to search the term entered
  - Once the list is returned, display them on one side of the screen
  - User can click on any of the videos and it will be featured in the center
  - They can click the play button and see a title/description of that video


# APP DESIGN
- Separate components
- Components:
1. SearchBar: identical to Photos App
  - Show input, user can type which updates State, when the enter key is hit, that triggers a formSubmit
    event
  - Send that search term to an App/Parent component which then will actually make the API request
2. VideoList: Render entire list of videos
  - Renders a list of the VideoItem
3. VideoItem: One specific video that will be contained in the VideoList
4. VideoDetail: Responsible for showing an actual video player that will play the fetched video
  - Will have a title and description of the video

- The videos will be from Youtube and are not fake
- Need to figure out how to show and embed the video into the application


COMPONENT HIERARCHY
                        APP
            ------------ | ------------
            |            |            |
        SearchBar   VideoDetail   VideoList
                                      |
                                  VideoItem

- Parent/Overall: App, retrieve list of videos and store the search term
- App will pass props to SearchBar, VideoDetail and VideoList
- VideoList will also pass props to VideoItem(collection) in order to properly display the videos


# Component Construction
- [x] SearchBar Component(completely identical to Photos SearchBar) a few different props
- [x] Create boilerplate for SearchBar component and show text input
- [x] Pull Semantic UI for aesthetics

- [x] Setup Youtube API: make request and display video list on the screen
- [x] Write code in `youtube.js` to make use of KEY and send API request over to youtube
- [x] Install, set up and create pre-configured Axios

- [x] Try out Youtube API, wire it to SearchBar
- [] Make request to Youtube API
- [x] Add callback() to class App, called anytime a user submits SearchBar form
