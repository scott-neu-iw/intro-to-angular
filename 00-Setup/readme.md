# Setup and Installation
## Software Installation
1. Install Visual Studio Code
    1. [Download](https://code.visualstudio.com/download)
    2. Recommended VsCode Extensions
        1. Angular Essentials (John Papa)
        2. GitLens (Eric Amodio)
        3. Bracket Pair Colorizer (Coenraad5)
2. Install node.js (if you already have node.js, you can update it to the latest)
    1. [Download](https://nodejs.org/en/download)
    2. Update npm (the latest is 6.9 as of this document)
	    1. Open powershell as an Administrator
		2. Type the following commands:
```
	Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
	npm install -g npm-windows-upgrade
	npm-windows-upgrade
```
3. Install Angular 7
	1. Open powershell as an Administrator
	2. Type the following commands to install (7.3.2 is the version as of this document)
```
TO INSTALL
	npm install -g @angular/cli@latest
```
-OR-
```
TO UPDATE
	npm uninstall -g @angular/cli
	npm cache verify
	# if npm version is < 5 then use `npm cache clean` 
	npm install -g @angular/cli@latest
```
4. Install Git (for pulling down completed examples)
    1. [Download](https://git-scm.com/downloads)
    2. Install
5. Download dotnet core
	1. [Download] https://dotnet.microsoft.com/download (minimum of 2.0)
	2. Install
