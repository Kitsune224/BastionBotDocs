description: Read how to install and configure Bastion Bot, manually. One step closer to making your Discord Server AWESOME!

# Installing Bastion Manually

!!! tip "Want to run Bastion 24x7?"
    If you want Bastion to serve 24/7 without having to hosting it on your
    PC and want to keep it cheap, reliable and convenient as possible, you can
    install Bastion, using the following guide, on a [DigitalOcean](https://m.do.co/c/0ee6cb9c7ee0)
    Linux VPS using [this link](https://m.do.co/c/0ee6cb9c7ee0) (using this link
    will be supporting The Bastion Bot project and will give you **$10** for
    free to start with DigitalOcean).

## Install Package Manager
### On GNU/Linux
Various distributions of GNU/Linux already comes with an amazing package manager. So,
if you're on linux, you can go to the [next step](#install-nodejs).

### On macOS
macOS is a very powerful operating system, but unlike GNU/Linux, it doesn't come
with a package manager. So, we need to install a package manager, called
[Homebrew](https://brew.sh/ 'Homebrew - The missing package manager for macOS'),
which will make it super easy to install various applications.

To install Homebrew, follow these simple steps:

1.  Open a Terminal prompt.
2.  Run the following command:
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### On Windows
Windows doesn't have a package manager like we have on GNU/Linux operating
systems, so we need to install a package manager, called
[Chocolatey](https://chocolatey.org/ 'Chocolatey - The package manager for Windows'),
which will make it super easy to install various applications.

To install Chocolatey, follow these simple steps:

1.  [Start a Command Prompt as an Administrator](https://technet.microsoft.com/en-us/library/cc947813(v=ws.10).aspx 'Learn how to start a Command Prompt as an Administrator').
2.  Run the following command:
```cmd
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

## Install Node.js
[Node.js](https://nodejs.org) is what Bastion is built upon. Which makes it extremely important to run
Bastion. Read [this guide](https://nodejs.org/en/download/package-manager/ 'Installing Node.js via package manager')
on installing Node.js for your operating system and install the `8.9.1 LTS`
version of Node.js.

## Install Git
[Git](https://git-scm.com/ 'Git') is a source code management software that is needed to track changes in
Bastion's source and download/update your local instance of Bastion if/when
needed.
If you don't understand any of that, don't worry, you don't need to, just visit
the [Git downloads page](https://git-scm.com/downloads 'Git - Downloads') to
download and install Git for your operating system.

## Install Dependencies
Bastion depends on various other software to install and run, you will need to
install those before you can start installing Bastion.

### On Linux
Debian and Ubuntu based Linux distributions
```bash
sudo apt-get install build-essential # build tools
sudo apt-get install wget curl screen python # other dependencies
```

Enterprise Linux and Fedora  
*Including **Red Hat**® **Enterprise Linux**® / **RHEL**, **CentOS** and **Fedora**.*
```bash
# If your distribution has yum package manager
sudo yum groupinstall "Development Tools" # build tools
sudo yum install wget curl screen python # other dependencies
npm install -g ffmpeg-binaries

# Or if your distribution has dnf package manager
sudo dnf groupinstall "Development Tools" # build tools
sudo yum install wget curl screen python # other dependencies
npm install -g ffmpeg-binaries
```

### On macOS
```bash
sudo xcode-select --install # xcode-command line tools
sudo brew install wget curl screen python ffmpeg # other dependencies
```

### On Windows
```cmd
npm install -g windows-build-tools
choco install ffmpeg
```

## Download Bastion
Now that you've done all the prerequisites, it's time to download Bastion.
Here's how you can do that:

1.  Open a Terminal (Command Prompt, if you're on Windows).
2.  Download (clone) Bastion's files from GitHub:
```bash
# If you're on GNU/Linux
cd ~ && git clone -b master -q --depth 1 https://github.com/TheBastionBot/Bastion.git
# If you're on macOS
cd "/Users/$USER" && git clone -b master -q --depth 1 https://github.com/TheBastionBot/Bastion.git
# If you're on Windows
cd %USERPROFILE%\Desktop && git clone -b master -q --depth 1 https://github.com/TheBastionBot/Bastion.git
```

## Install Bastion Dependencies
After it has downloaded (cloned) Bastion's files, it's time to install the
local dependencies required by Bastion.
To do that, simply run in the Terminal (Command Prompt, if you're on Windows):
```bash
npm install --only=production
```

## Configure Bastion
Here comes the last (but not the least) step, configuring Bastion, before it's
first run.

1.  Go to the `settings` directory (folder), that's inside the `Bastion` folder.
2.  You'll see two files here, `credentials_example.json` and
    `config_example.json`.
3.  Make duplicate copies of these two files and rename the duplicates to
    `credentials.json` and `config.json` respectively.
4.  Edit the `credentials.json` and `config.json` files and make the changes as
    required and save the file.

!!! note
    If you're on Windows, please don't use the **Notepad** application that
    comes with Windows by default, because Notepad doesn't support the `LF`
    line endings and breaks the file. At least, use a code editor like
    **[Notepad++](https://notepad-plus-plus.org/ 'Notepad++ - Free source code editor and Notepad replacement.')**
    or **[Atom](https://atom.io/ 'Atom - A Hackable text editor for the 21st century.')**.

## Get Bastion running

### On GNU/Linux or macOS
You get a `bastion.sh` script file that makes it easy to run Bastion without
any hassle, among other things. To start Bastion, run the following command:
```bash
cd ~/Bastion # Changes the current directory to the `Bastion`, if you aren't already there.
./bastion.sh --start # Starts Bastion
```

!!! tip "Pro Tip"
    The `bastion.sh` script can do a whole lot of other things besides just
    helping you with running & updating Bastion. Want to find out what else
    can it do? Just run the following command to know more: `./bastion.sh`

### On Windows
You get a `run.cmd` script file that makes it easy to run Bastion without
any hassle. To start Bastion, **Double-Click** the `run.cmd` file.

Now, you will see the status of Bastion in a Command Prompt (CMD) window.
If you want to terminate & stop Bastion, just close the Command Prompt window.
