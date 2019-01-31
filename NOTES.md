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
- [x] Make request to Youtube API
- [x] Add callback() to class App, called anytime a user submits SearchBar form

- [x] Take list of videos and render that as a list inside application
- Take list of videos received and set it as State in the App component
- Allowing App to update/re-render itself, which then allows rendering newly fetch videos onto screen

- [x] Focus on list of videos and rendering out as a list
- [x] Create VideoList component
  - Render an array of video objects
- [x] Create VideoItem component
  - For each video, render a single video item
  - Make sure VideoList shows a list of VideoItem(s)
  - Each VideoItem will be custom to show a slightly different video

# Render Video Thumbnails
- [] Connect both VideoItem and VideoList to the App component
- [x] Take each video object and pass it down as a prop into each VideoItem created
  - customize each video item component
- [] Semantic UI to add better styling to thumbnail

### Hierarchy with Semantic UI list
Component | className
-- | --
VideoList | ui relaxed divided list
VideoItem | item
VideoItem | item
VideoItem | item
VideoItem | item
VideoItem | item
VideoItem | item
