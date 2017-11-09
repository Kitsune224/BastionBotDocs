description: Read how to create a Discord Bot Application and Invite the Bot to your Discord server.

# Create Bot App and Invite

## Create a Discord Bot Application
Go to [Discord Developer Applications Page](https://discordapp.com/developers/applications/me).

Log in with your Discord account.

Click on the **+ New App** button.

Fill in the App Name (i.e., your bot's name), add an optional Avatar and
Description for your bot.

Click on the **Create App** button.

Click on **Create a Bot User** button and confirm that you want to add a bot
to this app.

## Invite your Bot to Discord
Copy your Bot's **Client ID** from your [Discord Applications page](https://discordapp.com/developers/applications/me).

Paste your **Client ID** in the input box below.
The either click on **Invite** button or copy the link in the code block,
to invite your Bot to your server.

<input id="clientID" pattern="[1-9]\d{1,20}" onkeyup="invLink(this)" required="" type="text" placeholder="267035345537728512" />
<button data-md-color-primary="grey" title="Invite to Discord" onClick="openInvLink(this)" style="margin-bottom:0">Invite</button>

<table class="codehilitetable">
  <tbody>
    <tr>
      <td class="code">
        <div class="codehilite" id="__code_1">
          <button class="md-clipboard" title="Copy to clipboard" data-clipboard-target="#__code_1 pre, #__code_1 code">
            <span class="md-clipboard__message"></span>
          </button>
          <pre><span></span><span id="inviteLink">https://discordapp.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&amp;scope=bot&amp;permissions=2146958591</span></pre></div>
      </td>
    </tr>
  </tbody>
</table>
