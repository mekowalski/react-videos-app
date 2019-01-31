# React Videos App

Creating this Videos App to have better ideas and more practice with React basics and fundamental elements

Kowalski, are you there?

## App Summary
- In this Videos App I practiced writing basic and fundamental React elements
- Videos App is very similar to the Photos App that was made before this
- A user can enter a search term and a display will render videos that match the search term ie: tulips returns videos of tulips
- What was learned:
  - Component Design and project structure
  - Create a search form for the user
  - Create, alter and handle events and submissions
  - Solve context issues
  - Connecting an external API(Youtube) and ability to request/retrieve/display data
  - Utilized Axios with Async Await to request data
  - Controlled and Uncontrolled elements
  - Communicating from Child to Parent and invoking callbacks in Children
  - So far, different styling with separate custom CSS and using Semantic UI's grid system
  - SearchBar: Send search term to an App/Parent component which then will actually make the API request
  - VideoList: Render entire list of videos(VideoItem)
  - VideoItem: One specific video that will be contained in the VideoList
  - VideoDetail: Responsible for showing an actual video player that will play the fetched video with a few details of title and description
  - Built App to have 2 State props(videos and selectedVideo)
  - Use `this.setState` for both State props on updating videos(VideoList & VideoDetail) with a new search
  - None of the videos are fake, videos can be searched for and played on application

- What this App doesn't do:
  - There is no user auth/id/login
  - The Videos App does not display a private list from a specific user
  - Actions such as: comments/likes/dislikes/shares/etc are not present
