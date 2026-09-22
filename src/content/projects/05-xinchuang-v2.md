---
title: 信创下一代统一产品 jn.itms.v2
summary: 微服务化、模块化的信创统一产品，承载 C# 老系统向 Java 重写与接口兼容。
role: 核心贡献者
stack: [Java 17, Spring Boot 3.5, KingBase, Nacos, Redis, ES, RabbitMQ, MinIO]
challenge: C# 老系统功能需平滑迁移到 Java 微服务，且要兼容既有接口与数据库语义。
solution: 搭建 C#→Java 翻译对照兼容性测试基础设施；实现老系统接口兼容层（Task/TimerServer/jwt/路由大小写）；MySQL 保留字拦截器、KingBase 部署脚手架；批量补全 DTO 中文 Schema。
result: 形成可回归的跨语言兼容测试体系，老接口在 Java 侧平滑对齐，信创数据库落地有脚手架支撑。
tags: [信创, C#→Java, 兼容层, KingBase, 兼容测试]
order: 50
---
