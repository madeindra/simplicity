# Simplicity Jekyll Theme

![Preview](/preview.png)

Simplicity is a clean and minimalistic Jekyll theme designed for bloggers who value simplicity and functionality. Built with Tailwind CSS, the theme offers sleek design, responsiveness, and modern features such as dark/light theme toggling and post search.

## Features

- **Tailwind CSS**: Utilizes the power of Tailwind CSS for easy and flexible styling.
- **Dark/Light Theme Toggle**: Seamlessly switch between dark and light themes.
- **Post Search**: Built-in functionality for searching blog posts.
- **Responsive Design**: Fully responsive, adapting to all screen sizes and devices.
- **Easy Customization**: Straightforward options and structure for quick customization.

## Installation

To set up the Simplicity theme on your local machine, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/madeindra/simplicity.git
cd simplicity
```

2. Install dependencies

```bash
bundle install
npm install
```

3. Run the server

```bash
bundle exec jekyll serve --config _config.yml,_config-dev.yml --livereload
```

4. Open your browser and navigate to http://localhost:4000

## Configuration

You can customize various aspects of the theme by modifying the `_config.yml` file. Here is a detailed explanation of each configuration option:

### Site Settings
- **`url`**: The base URL for your site (e.g., `https://example.github.io`).
- **`title`**: The title of your site (e.g., `Simplicity`).
- **`author`**: The name of the site author (e.g., `John Doe`).
- **`permalink`**: The permalink structure for your posts (e.g., `/:title/`).
- **`description`**: A short description of your site.
- **`keywords`**: A list of keywords related to your site (e.g., `blog`).

### Header Settings
- **`search_enabled`**: Enable or disable the search feature (true/false).
- **`home_enabled`**: Enable or disable the Home link in the header (true/false).
- **`about_enabled`**: Enable or disable the About link in the header (true/false).

### Footer Settings
- **`sitemap_enabled`**: Enable or disable the sitemap link in the footer (true/false).
- **`feed_enabled`**: Enable or disable the rss feed link in the footer (true/false).

### Homepage Settings
Customize the content of your homepage:
- **`homepage.welcome.title`**: The title displayed in the welcome section.
- **`homepage.welcome.subtitle`**: The subtitle displayed in the welcome section.

### About Page Settings
Customize the content of your About page:
- **`about.author_name`**: The name of the author (e.g., `John Doe`).
- **`about.author_image`**: The path to the author's image (e.g., `/assets/images/author.jpg`).
- **`about.social_media_enabled`**: Enable or disable social media links (true/false).
- **`about.description`**: A list of paragraphs describing the author.

### Social Media Settings
Add your social media handles:
- **`social_media.email`**: Email address.
- **`social_media.linkedin`**: LinkedIn username.
- **`social_media.github`**: GitHub username.
- **`social_media.youtube`**: YouTube channel name.
- **`social_media.twitter`**: Twitter handle.
- **`social_media.instagram`**: Instagram username.

### Disqus Settings
Configure Disqus for comments:
- **`disqus.shortname`**: Your Disqus shortname.

### Per Post Settings
Available config for each posts:
- **`category`**: Category of the post.
- **`image`**: Image for post preview on homepage.
- **`feature_image`**: Show image as featured on top of the post page (true/false).
- **`description`**: Post description on homepage.
- **`keywords`**: Keywords for metadata of the post page.
- **`comments`**: Enable disqus comment on the page (true/false).

## Github Pages

Follow these steps to deploy your Jekyll site using GitHub Actions.
1. **Create a New Repository with this Template**: 
   - Click on `Use this template` and click on `Create a new repository`
   - Use this format for the repository name `username.github.io` with username being your Hub username

2. **Clone the Repository and Configure**: 
   - Clone your repository and make any necessary configurations:
     ```bash
     git clone https://github.com/username/username.github.io
     cd username.github.io
     ```
   - Copy all contents of simplicity into the repository
   - Configure `_config.yml` as needed

3. **Ensure `x86_64-linux` Platform in Gemfile.lock**:
   - To ensure that the site can run in GitHub Actions, make sure the `Gemfile.lock` includes the `x86_64-linux` platform. Run the following command if necessary:
     ```bash
     bundle lock --add-platform x86_64-linux
     ```

4. **Create a GitHub Actions Workflow**: 
   - Create a GitHub Actions workflow file located at `.github/workflows/gh-pages.yaml`:
     ```yaml
     name: Build and deploy this site to GitHub Pages

     on:
       push:
         branches:
           - main

     jobs:
       github-pages:
         runs-on: ubuntu-latest
         steps:
           - uses: actions/checkout@v3
           
           - name: Setup Ruby
             uses: ruby/setup-ruby@v1
             with:
               ruby-version: 3.1
               bundler-cache: true
           
           - name: Setup Node
             uses: actions/setup-node@v4
             with:
               node-version: 20

           - run: npm install
           
           - name: Build site
             uses: limjh16/jekyll-action-ts@v2
             with:
               enable_cache: true
           
           - name: Deploy
             uses: peaceiris/actions-gh-pages@v4
             with:
               github_token: ${{ secrets.GITHUB_TOKEN }}
               publish_dir: ./_site
     ```

5. **Configure Repository Settings**:
   - Open your repository settings.
   - Navigate to the **Actions** tab and select **General**.
   - In the **Workflow permissions** section, select **Read and write permissions**.
   - Click **Save** to save your settings.

6. **Enable GitHub Pages**:
   - After the first action run, a `gh-pages` branch will be created.
   - Open your repository settings again.
   - Navigate to the **Pages** section.
   - Select **Deploy from a branch**.
   - Set the source to `gh-pages`.
   - Click **Save**.

7. **View Your Deployed Site**:
   - Open your browser and navigate to:
     ```
     https://{username}.github.io
     ```
     Replace `username` with your GitHub username

And that's it! Your Jekyll site should now be live on GitHub Pages.

## Acknowledgements

Special thanks to [Giorgi Mezurnishvili](https://mzrn.sh/) for providing the starter template.