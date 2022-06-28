# Ropsten Faucet GraphQL API

托管在`The Graph`的服务

https://api.thegraph.com/subgraphs/name/crazygit/faucet


# 本地部署

1. 启动一个本地的节点，比如`hardhat node` 或`Ganache`
2. 将合约部署到本地节点，记住合约地址
3. 修改`subgraph.yaml`文件中的`dataSources[0].source.address`合约地址为第2步中部署的合约地址
4. 运行`docker-compose up -d`, 启动本地的`graph-node`
5. 部署`subgrapth`到本地的`graph-node`

    ```shell
    $ npm run create-local
    $ npm run deploy-local
    ```

部署好之后，可以通过<http://localhost:8000/subgraphs/name/crazygit/faucet/graphql>查询数据，首次查询需要等待索引创建好。


## 本地可用服务

### TheGraph

- GraphQL HTTP server <http://127.0.0.1:8000/>
- GraphQL WebSocket server `telnet 127.0.0.1 8001`
- JSON RPC Admin: <http://127.0.0.1:8020/>
- Index node server: <http://127.0.0.1:8030/>
- Metrics server: <http://127.0.0.1:8040/>


### IPFS


第一次启动 IPFS 后需要配置下跨域信息，访问<http://127.0.0.1:5001/webui>页面，在页面上可以得到启用`cors`的命令
`docker exec`进入`ipfs`容器执行配置命令后重启服务即可。

- Web UI <http://127.0.0.1:5001/webui>
- P2P TCP/QUIC transports: `telnet 127.0.0.1 4001`
- Gateway: `telnet 127.0.0.1 8080`
- WebSocket: `telnet 127.0.0.1 8081`  暂时不可用，应该修改启动参数，启用该服务


### pgadmin

<http://127.0.0.1:5433/>
