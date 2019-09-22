#Deloy Vue to AWS 

## 1 Create EC2 instance
-   Chose Ubuntu/Linux AMI, public instance, enable assign public IP.
-   Config Security Group for instance enable port 80, 443, 22, all traffic
-   Run instance, connect via ssh.
## 2 Config EC2 instance
-   In ec2 instance run sudo apt-get update.
-   Install node: sudo apt-get install node
-   Install nginx to config reserve proxy: sudo apt-install nginx
-   Install npm to manage packages.
-   config /etc/nginx/site-avaiables/default, change `root` path to `/var/www/html/vue/dist`
-   cd `/var/www/html/` clone vue repo to `vue` directory, cd `vue` `folder` run `npm install` to install all packages.
-   Run `npm install vue-cli` to run `server`.
-   Run `npm run build` to build source to `dist` folder.
-   Restart `nginx`: `service nginx restart` or `nginx -s reload`

### 3 Config Route53.
-   Create `A-record` with public instance's public IP.
-   Go `domain name` server to test.
### 4 Assign to Application load balancer to run HTTPS
-   Create ALB, target group associate EC2 instance to target group.
-   Create listener for HTTPS forward to target group.
-   Modify HTTP's listener redirect to HTTPS.
-   Create A-record on Route53, chose Alias, add ALB name.
-   Go `domain name` server via `https://` to test security connection.

