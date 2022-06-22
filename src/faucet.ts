import { BigInt } from "@graphprotocol/graph-ts"
import {
  Faucet,
  FallbackEvent,
  OwnershipTransferred,
  ReceiveEvent,
  WithDrawEvent,
} from "../generated/Faucet/Faucet"
import { WithDrawEntity } from "../generated/schema"

export function handleWithDrawEvent(event: WithDrawEvent): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = WithDrawEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new WithDrawEntity(event.transaction.from.toHex())
  }
  // Entity fields can be set using simple assignments
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.getBalance(...)
  // - contract.owner(...)
}

// export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

// export function handleReceiveEvent(event: ReceiveEvent): void {}

// export function handleFallbackEvent(event: FallbackEvent): void {}
