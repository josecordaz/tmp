node {
    stage('Clean') { // <2>
        sh 'rm -rf tmp' // <3>
    }
      
    stage('Cloning') { // <2>
        sh 'git clone git@github.com:josecordaz/tmp.git' // <3>
    }
    
    stage('Downloading dependencies') { // <2>
        sh 'cd tmp && npm install' // <3>
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
        sh 'cd tmp && ng github-pages:deploy'
    }
}

/*node {
  wrap([$class: 'Xvfb']) {
    ... your steps here
  }
}*/
