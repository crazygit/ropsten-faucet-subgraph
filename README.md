# Ropsten Faucet GraphQL API

https://api.thegraph.com/subgraphs/name/crazygit/faucet

## 本地部署

1. 启动一个本地的节点，比如`hardhat node` 或`Ganache`
2. 将合约部署到本地节点，记住合约地址
3. 修改`subgraph.yaml`文件中的`dataSources[0].source.address`合约地址为实际部署的地址
4. 运行`docker-compose up -d`, 启动本地的`graph-node`
5. 部署`subgrapth到本地的`graph-node`

   ```shell
   npm run create-local
   npm run deploy-local
   ```

   部署好之后，可以通过<http://localhost:8000/subgraphs/name/crazygit/faucet/graphql>查询数据，首次查询需要等待索引创建好。
