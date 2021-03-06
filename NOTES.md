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
- [x] Connect both VideoItem and VideoList to the App component
- [x] Take each video object and pass it down as a prop into each VideoItem created
  - customize each video item component
- [x] Semantic UI to add better styling to thumbnail

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

- VideoList component must have a div of `ui relaxed divided list`
- Each VideoItem has to return an element that has a top-level className of `item`

- [x] Create better container with Semantic UI
- [x] Fix image size, currently too large
- Title text should be modified but neither image/title can work with Semantic UI
- [x] Separate VideoItem CSS file to not clutter up VideoItem component with styling rules

# Communicate Child to Parent
- When a video from the list is clicked, the video should display prominently with its player and its
  tile and description underneath
- How to make sure clicking on the video will open up a detailed window of sorts
- [x] Add new state prop of `selectedVideo`
- [x] Get click event on VideoItem
  - Pass function cb() to VideoList then VideoItem

- [x] Make sure onVideoSelect takes that video and sets it on the State
  - specifically on the selectedVideo prop
  - onces that is updated, App can re-render

- [x] Create VideoDetail component
  - App renders VideoDetail
  - pass in the selected video to the VideoDetail, as recorded on the State prop within App

- [x] improve VideoDetail styling a tiny bit
  - maybe show a panel with the title and description

- [x] Make sure to actually show a video player on the screen
  - make each video playable
  - VideoDetail is responsible of video player
  - introduce iframe tag(HTML)
  - iframe attempts to make a request to an outside website
  - [x] make iframe element and tell it to request on its own(without AJAX) over to Youtube address

## Create Similar Youtube Display
- List of videos to appear on right-hand side of the current video
- Current video should veer more to left and be large with video play
- When new search is made, clear the current video

### Fixing some errors
- [x] iframe element needs a title assigned to it
- [x] make sure img elements have an appropriate alt property
- [x] each list of records needs to have a KEY prop assigned to it
- [x] make video list show on right hand side of the main/current video
  - use grid system with semantic ui/ Not Grid CSS/ Use Semantic Ui's grid system  

### Default video selection
- [x] figure out a default term to remove/replace static `Loading...` in VideoDetail
  - componentDidMount() lifecycle inside App, attempt to make default search when this app is first rendered to the screen

- [x] new search should clear current video
- one little fix to address both issues above
