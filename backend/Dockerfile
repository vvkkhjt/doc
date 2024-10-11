FROM zenika/alpine-maven

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN mvn dependency:go-offline

EXPOSE 9527

CMD [ "mvn", "spring-boot:run", "-Dspring-boot.run.jvmArguments='-Duser.timezone=Asia/Shanghai'" ]