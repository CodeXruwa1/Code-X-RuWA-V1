# 💠"Code X RuWA V1" Whatsapp BOT💠

\\=================================================================//

මෙී ලින්ක් එකෙන් ගිහින් නමිබර් එක දීලා Pair code එක අරන් Link කරගන්න.

👉 [ Pair Code Get link ] - https://pair-code-production.up.railway.app/pair

\\=================================================================//

<hr>

    <b>DEPLOY</b>
    </br>
    </br>
    [![nima](https://img.shields.io/badge/asitha_md_deploy_on_heroku-430098?style=for-the-badge&logo=github&logoColor=white&buttcode=1n2i3m4a)](https://github.com/CodeXRuWA/Code-X-RuWA-V1/new/main?filename=.github%2Fworkflows%2Fnode.js.yml&workflow_template=ci%2Fnode.js)

    
  
<hr>

<b>COPY WORKFLOW CODE</b></br>
   

         name: Node.js CI

         on:
           push:
             branches:
               - main
           pull_request:
             branches:
               - main

         jobs:
           build:

             runs-on: ubuntu-latest

             strategy:
               matrix:
                 node-version: [20.x]

             steps:
             - name: Checkout repository
               uses: actions/checkout@v3

             - name: Set up Node.js
               uses: actions/setup-node@v3
               with:
                 node-version: ${{ matrix.node-version }}

             - name: Install dependencies
               run: npm install

             - name: Start application
               run: npm start

<b>මෙී Code එ⁣ක Copy කරන් Action වලින් BOT Deploy කරන්න...☑️</b></br>              

\\=================================================================//

©️ copyright Credit  
< bot base - prabth-MD >     < Pair code Link - Asitha-MD > 


