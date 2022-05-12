import { Barber } from "./barber";
import { BarberJobs } from "./barberJobs";
import { Client } from "./client";
import { User } from "./user";

export enum AttendanceEnum {
  SCHEDULED = "SCHEDULED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

export class Attendance {
  private id: string;
  private date: Date;
  private client: Client;
  private barberJob: BarberJobs;
  private priceInCents: number;
  private currency: string;
  private status: AttendanceEnum;
  private user: User;

  constructor(
    id: string,
    date: Date,
    client: Client,
    barberJob: BarberJobs,
    priceInCents: number,
    currency: string,
    status: AttendanceEnum,
    user: User
  ) {
    this.id = id;
    this.date = date;
    this.client = client;
    this.barberJob = barberJob;
    this.priceInCents = priceInCents;
    this.currency = currency;
    this.status = status;
    this.user = user;
  }

  public getId(): string {
    return this.id;
  }

  public getDate(): Date {
    return this.date;
  }

  public getClient(): Client {
    return this.client;
  }

  public getBarber(): Barber {
    return this.barberJob.getBarber();
  }
  public getJobName(): string {
    return this.barberJob.getName();
  }

  public getPriceInCents(): number {
    return this.priceInCents;
  }

  public getStatus(): AttendanceEnum {
    return this.status;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public getUser(): User {
    return this.user;
  }
}
