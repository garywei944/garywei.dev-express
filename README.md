# garywei.dev

My personal website, as an expansion of resume.

![garywei.dev](garywei_dev_210805.png)

express+ejs server-side rendering dynamic website.

## Check it online
* [garywei.dev](https://www.garywei.dev)


## A note for using this repo as a template
This project is highly modularized s.t., ideally, you only need to change the contents under [`app/views`](app/views).

Most of the contents are stored in `.yml` files and long paragraphs are stored in `.ejs` files.


## Instruction for Deployment
Just as reference, I deployed this website in 3 manners to achieve auto-deployment.

### Docker Compose
I provide a `Makefile` to install the docker container.
```shell
➜ make help
Available rules:

clean               rm -fr node_modules
down                docker-compose down
install             npm install
start               docker-compose up
stop                docker-compose stop
```

For a pure server, run the following command:
```bash
make start
```

which is equivalent to
```bash
docker-compose up -d --build
```

For sure, it's not auto-deployment, but it's a system independent solution to deploy websites on servers.

### Heroku
I use GitHub Actions to push any changes made in `main` branch to Heroku. Check [Deploy to Heroku](https://github.com/marketplace/actions/deploy-to-heroku) and [`deploy_heroku.yml`](.github/workflows/deploy_heroku.yml)

### AWS Elastic Beanstalk
[AWS CodePipeline](https://aws.amazon.com/codepipeline/) performs the auto-deployment very well. I used to deploy it on AWS EB but stopped it due to the cost.

## Template
The template could be downloaded at [Unfold - Colorlab](https://colorlib.com/wp/template/unfold/).

## License
[MIT License](LICENSE) is included in the project.
