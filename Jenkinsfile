node {
<<<<<<< HEAD
  
=======
>>>>>>> 116a88472558d890bf5bc41348d7db42c912aaa6
    stage('Clean') {
        sh 'rm -rf tmp'
    }
    
    stage('Cloning') {
        sh 'git clone git@github.com:josecordaz/tmp.git'
    }

    stage('Downloading dependencies'){
        sh 'cd tmp && npm install'
    }

<<<<<<< HEAD
    stage('Checkout Master') {
        sh 'cd tmp && git checkout main'
    }
    
    stage('Pull Master') {
=======
    wrap([$class: 'Xvfb']) {
        stage('Testing') {
            sh 'cd tmp && ng test --watch false'
        }
    }

    stage('Checkout Main') {
        sh 'cd tmp && git checkout main'
    }
    
    stage('Pull Main') {
>>>>>>> 116a88472558d890bf5bc41348d7db42c912aaa6
        sh 'cd tmp && git pull'
    }
    
    stage('Checkout Master'){
        sh 'cd tmp && git checkout master'
    }
    
    stage('Merge') {
        sh 'cd tmp && git merge main'
    }

    stage('Building'){
        sh "cd tmp && ng build --deploy-url='https://josecordaz.github.io/tmp/' -prod --output-path='docs'"
    }
    
    stage('Adding build'){
        sh "cd tmp && git add . && git commit -m 'build from Jenkins'"
    }

    stage('Pusn to master') {
        sh 'cd tmp && git push'
    }

}
