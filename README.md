# Summary

In index.js we have a route /nginx that connects to other deployment of nginx image

First deployment is of k8s-web-to-nginx.yml

Second deployment is of nginx.yml

### To create the deployment and service
```
kubectl apply -f k8s-web-to-nginx.yml -f nginx.yml
```
### Forward the port of k8s-web-to-nginx

Open the port of SG 3030 to receive the traffic from internet
```
kubectl port-forward service/k8s-web-to-nginx 3030:3333 --address=0.0.0.0
```

### Check connection
```
http:<Public IP 0f EC2>:3030
http:<Public IP 0f EC2>:3030/nginx
```
