import {Controller, Get, Post, Body} from '@nestjs/common';
import {Company} from "./company";

@Controller('companies')
export class CompaniesController {

    private companies = [
        new Company('Coke', 'Soda', '1234'),
        new Company('Apple', 'Computers', '1234'),
        new Company('Tesla', 'Cars', '1234')
    ];

    @Get()
    getCompanies() {
        return this.companies;
    }

    @Post()
    createCompany(@Body() company: Company) {
        this.companies.push(company);
    }
}