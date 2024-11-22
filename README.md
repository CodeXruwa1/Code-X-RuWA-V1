# 💠"Code X RuWA V1" Whatsapp BOT💠

\\=================================================================//

මෙී ලින්ක් එකෙන් ගිහින් නමිබර් එක දීලා Pair code එක අරන් Link කරගන්න.

👉 [ Pair Code Get link ] - https://pair-code-production.up.railway.app/pair

\\=================================================================//

මෙී Code එ⁣ක Copy කරන් Action වලින් BOT Deploy කරන්න.

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

\\=================================================================//

©️ copyright Credit  
< bot base - prabth-MD >     < Pair code Link - Asitha-MD > 


