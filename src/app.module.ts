import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AnswersModule } from '~/answers/answers.module';
import { AuthModule } from '~/auth/auth.module';
import { CompaniesModule } from '~/companies/companies.module';
import { CacheService } from '~/config';
import { FormsModule } from '~/forms/forms.module';
import { QuestionsModule } from '~/questions/questions.module';
import { RootModule } from '~/root/root.module';
import { SurveysModule } from '~/surveys/surveys.module';
import { UsersModule } from '~/users/users.module';

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useClass: CacheService
    }),
    RootModule,
    UsersModule,
    CompaniesModule,
    FormsModule,
    SurveysModule,
    QuestionsModule,
    AnswersModule,
    AuthModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ]
})
export class AppModule {}
