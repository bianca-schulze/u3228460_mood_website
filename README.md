# Mood Web App Development

During the design and development of the web app, Mood, I faced a number of problems but equally learned a lot from the experience. Some of the biggest issues occurred when trying to implement data from the API, but I will go into that in more detail later. For now, I want to reflect on the overall design process.

## Design Process
I found the ideation phase and prototyping phase relatively straightforward, the only limitation here was not having a strong understanding of the possibilities I could achieve. During ideation, I was constantly stuck between designing with endless possibilities in mind and designing with my own limitations in mind. I think it's safe to say, if I had a team of developers behind me, I would have planned to build something a little more complex, like the Ordinary's [Skincare Regimen Builder](https://theordinary.com/en-au/skincare-guides/regimen-guide.html) or something super interactive like [Nike's Footwear Builder](https://www.nike.com/au/react) (probably not, this looks seriously complicated). However, with that being said, I was still able to build the basic framework of what I set out to achieve during the prototype phase which is a win in itself.
## API Integration
Having never worked with APIs before, I found this assignment challenging, yet rewarding when things went right. My original concept incorporated Spotify's API, which at a glance, looked easy to implement. However, it was at about Step 9, when I realized, I would need to go through an OAuth 2.0 authorization flow which required a level of JavaScript knowledge I do not have. So, when faced with adversity, I went back to the drawing board and researched other more publicly available APIs and stumbled across the YouTube API, powered by Google. Instead of diving straight in, I read through the documentation, and it seemed fairly straightforward. As I started to tackle the new API, I came across a few small hurdles:
- Playlist endpoint – Unfortunately, the videos did not return when trying to target and display playlists. To resolve this issue, I focused on using the search result to point to a singular video instead.
- Daily API limits – When running the YouTube API on a live server, it called the API too frequently and I had reached a daily limit preventing me from testing.
- Blocked videos – After thinking I had finally got it to work, I unfortunately came across an issue where YouTube refused to play most videos on an insecure server. The solution for this was to upload my code to [glitch.com](https://glitch.com/) and continue developing there.

## CSS/HTML
After learning HTML and CSS over a year ago, I found it really difficult to remember a lot of the basic semantics of HTML and CSS rules. It didn't take too long to quickly get back up to speed, however I did need to constantly Google things like how to align grid items, which took more time than anticipated. Further to this, remembering how to create responsive design and add media queries was a whole other side mission that took a few hours to work out.

## Overall
I am really happy with the result, despite the hurdles it took to get there, and the best part is, I can actually see myself using it in the future.

## References
1. [Stack Overflow](https://stackoverflow.com/): The Stack Overflow community played a crucial role in troubleshooting technical issues and finding solutions to specific coding problems.
2. [OpenAI](https://openai.com/): OpenAI's GPT-3.5-based AI model provided assistance with coding, offering code snippets, explanations, and guidance on best practices for JavaScript and CSS development.
3. [W3Schools](https://www.w3schools.com/): W3Schools provided tutorials and examples on various web development technologies, making it a helpful resource for learning and referencing web-related concepts.
4. [GitHub](https://github.com/): GitHub was used for version control and collaboration with peers in class. It facilitated code sharing, tracking changes, and managing project tasks.
5. [Google Developers YouTube Data API Documentation](https://developers.google.com/youtube/v3/docs): The Google Developers documentation was an essential resource for understanding how to retrieve and interact with YouTube data within the web application.
