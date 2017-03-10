node {
    stage('Location') { // <2>
        sh 'pwd' // <3>
    }
  
    stage('Clean') { // <2>
        sh 'rm -rf tmp' // <3>
    }
      
    /*stage('Cloning') { // <2>
        sh 'pwd' // <3>
    }
 
    stage('deleting'){
        sh 'rm -rf node_modules'
    }*/
    
    stage('Cloning') { // <2>
        sh 'git clone git@github.com:josecordaz/tmp.git' // <3>
    }

    stage('Downloading dependencies'){
        sh 'cd tmp && npm install'
    }

    stage('Checkout Master') { // <2>
        sh 'cd tmp && git checkout main' // <3>
    }
    
    stage('Pull Master') { // <2>
        sh 'cd tmp && git pull' // <3>
    }
    
    stage('Checkout master'){
        sh 'cd tmp && git checkout master'
    }
    
    stage('Merge') {
        sh 'cd tmp && git merge main'
    }
    
    stage('Pusn to master') {
        sh 'cd tmp && git push'
    }
    
    wrap([$class: 'Xvfb']) {
        stage('Testing') {
            sh 'cd tmp && ng test --watch false'
        }
    }
    
    stage('Publish') {
        sh 'cd tmp && ng serve --deploy-url https://josecordaz.github.io/tmp/'
    }
}

/*node {
  wrap([$class: 'Xvfb']) {
    ... your steps here
  }
}*/
