import {vi, expect, describe, it, beforeEach, afterAll} from "vitest";

import {UsersMediator} from "../users.mediator";
import {UsersService} from "../../../../../domain/users/service/users.service";
import {AppContext} from "../../../../../aop/http/context";
import {BudgetsService} from "../../../../../domain/budgets/budgets.service";

describe('UsersMediator', () => {
    let mediator: UsersMediator;
    let usersService: UsersService;
    let budgetsService: BudgetsService;
    let context: AppContext;

    beforeEach(() => {
        usersService = {
            create: vi.fn(),
            getById: vi.fn(),
        } as unknown as UsersService;


        context = {
            logger: {
                info: vi.fn(),
            },
            connection: {
                withTransaction: vi.fn().mockImplementation(async (f: Function) => f() as Function),
            },
        } as unknown as AppContext;

        mediator = new UsersMediator(usersService, budgetsService);

    });

    afterAll(() => {
        vi.resetAllMocks();
    });

    describe('constructor', () => {
        it('should be defined', () => {
            expect(mediator).toBeDefined()
        });
    });

    describe("create", () => {
        it("Should call usersService.create", async () => {
            const userInput = {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            }

            await mediator.create(userInput, context)
            expect(usersService.create).toHaveBeenCalledTimes(1)
        })
    })

    describe("getById", () => {
        it("Should call usersService.getById", async () => {
            const id = "123456798"

            await mediator.getById(id, context)
            expect(usersService.getById).toHaveBeenCalledTimes(1)
        })
    })
});