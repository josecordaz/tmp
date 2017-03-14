node {
    stage('Clean') {
        sh 'rm -rf tmp'
    }
    
    stage('Cloning') {
        sh 'git clone git@github.com:josecordaz/tmp.git'
    }

    stage('Downloading dependencies'){
        sh 'cd tmp && npm install'
    }

    wrap([$class: 'Xvfb']) {
        stage('Testing') {
            sh 'cd tmp && ng test --watch false'
        }
    }

    stage('Checkout Master') {
        sh 'cd tmp && git checkout main'
    }
    
    stage('Pull Master') {
        sh 'cd tmp && git pull'
    }
    
    stage('Checkout master'){
        sh 'cd tmp && git checkout master'
    }
    
    stage('Merge') {
        sh 'cd tmp && git merge main'
    }

    stage('Building'){
        sh "cd tmp && ng build --deploy-url='https://josecordaz.github.io/tmp/' -prod --output-path='docs'"
    }
    
    stage('Pusn to master') {
        sh 'cd tmp && git push'
    }
    
}
