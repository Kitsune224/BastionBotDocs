description: Read how to get the API keys that is required by Bastion to achieve it's full potential.

!!! tip
    All the API Keys are optional, and are only required by specific commands,
    that's mentioned in the specific sections. If you do not wish to use any of
    those commands (yet) you can skip that section or this entire section and
    can come back here later when you want those.

!!! note
    When you get/receive an API key from any of the sections below, keep those
    keys/tokens/IDs in a file in your local computer where it's safe and easy
    to access. You are going to need these keys when you are configuring
    Bastion after the installation.

## Google API Key

!!! info ""
    Required by `maps` and `shorten` commands.

Go to the [Google API Console](https://console.developers.google.com/).

Create a **new project**, name it anything you like. Once the project is
created, click on **Enable APIs**.

Now, enable **Google Static Maps API** and **URL Shortener API**.

On the left tab, click **Credentials**. Then click **Create Credentials**
button. Now click on **API Key**. A window will popup with your **Google API
key.**

## Cleverbot API Key

!!! info ""
    Required by `chat` command. And if you want to chat with Bastion.

Go to the [Cleverbot API site](https://www.cleverbot.com/api).

Select an **API Pack** as per your requirements. Click on **Add to Cart** /
**Sign up now**.

Input your details as mentioned. After you complete the signup, you will receive
an email to verify your account. After you have verified, login to your account.

After you are successfully logged in to your account, you will see your
**API Key** in **My Accounds** section of the website.

## PUBG API Key

!!! info ""
    Required by `pubg` command.

Go to [PlayerUnknown's Battlegrounds Tracer Network Site](https://pubgtracker.com/site-api).

Login/Register your account (Click Login/Register at the top right corner).
After you've (registered and) logged in, click on **Generate API key**.

Fill up the given form with your name, email, website (you can also use
<https://bastionbot.org>) and description. After that click on
**Generate API key**.

Then you'll see your **API Key** under the Authentication section.

## Battlefield API Key

!!! info ""
    Required by `battlefield1` and `battlefield4` commands.

Go to [Battlefield Tracer Network Site](https://battlefieldtracker.com/site-api).

Login/Register your account (Click Login/Register at the top right corner).
After you've (registered and) logged in, click on **Generate API key**.

Fill up the given form with your name, email, website (you can also use
<https://bastionbot.org>) and description. After that click on
**Generate API key**.

Then you'll see your **API Key** under the Authentication section.

## HiRez API Key

!!! info ""
    Required by `paladins` command.

Fill up the [Hi-Rez Developer Credentials Application Form](https://fs12.formsite.com/HiRez/form48/secure_index.html)
with correct details. Then submit it.
After HiRez Studios have verified you, they will mail you with your
HiRez **DevId** & **AuthKey**.

!!! note
    It generally takes few hours for them you mail you, so you can proceed with
    the installation, as you can add these to your `credentials.json` file
    anytime later.

## Twitch API Key

!!! info ""
    Required by `streamers` and `twitch` commands.

Read [this article](https://dev.twitch.tv/docs/v5/guides/authentication/#registration) on [How to get Twitch API Client ID & Client Secret](https://dev.twitch.tv/docs/v5/guides/authentication/#registration).

## Musixmatch API Key

!!! info ""
    Required by `lyrics` command.

Visit [Musixmatch Developer site](https://developer.musixmatch.com/) and signup
for a new accout (or signin if you already have one).

When all the signup steps are completed, you'll get your Musixmatch API key.

## The Movie DB API Key

!!! info ""
    Required by `movie` and `tvShow` commands.

Read [The Movie Database FAQ](https://www.themoviedb.org/faq/api) to know how
to get their API Key.
